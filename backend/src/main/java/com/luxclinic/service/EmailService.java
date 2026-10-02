package com.luxclinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender emailSender;

    @Value("${clinic.owner.email:owner@luxclinic.com}")
    private String ownerEmail;

    @Value("${spring.mail.username:abhibhojani121@gmail.com}")
    private String fromEmail;

    @Value("${RESEND_API_KEY:}")
    private String resendApiKey;

    /**
     * Send notification email to the Clinic Owner / Dr. Kenin Jadvani
     */
    public void sendAppointmentNotificationToOwner(String customerName, String customerEmail, String customerPhone, String service, String time) {
        String subject = "🚨 New Appointment Booking Alert - " + customerName + " (" + service + ")";
        String text = String.format(
            "Hello Dr. Kenin Jadvani / Luxe Skin Clinic Team,%n%n" +
            "A new appointment booking has been submitted through the clinic landing page:%n%n" +
            "--------------------------------------------------%n" +
            "PATIENT DETAILS:%n" +
            "Name: %s%n" +
            "Email: %s%n" +
            "Phone: %s%n%n" +
            "APPOINTMENT DETAILS:%n" +
            "Treatment: %s%n" +
            "Scheduled Time: %s%n" +
            "Location: Luxe Skin Clinic, 401 Pavitra Point, Yogi Chowk, Surat%n" +
            "--------------------------------------------------%n%n" +
            "Please log in or contact the patient to confirm the consultation slot.%n%n" +
            "Luxe Skin Clinic Booking System",
            customerName, customerEmail, customerPhone != null ? customerPhone : "Not provided", service, time
        );

        // Try Resend HTTP API first (works on Render free tier over Port 443)
        if (sendViaResend(ownerEmail, subject, text)) {
            return;
        }

        // Fallback to JavaMailSender (SMTP)
        if (emailSender == null) {
            System.out.println("JavaMailSender is not initialized. Skipping email to owner.");
            return;
        }

        SimpleMailMessage message = new SimpleMailMessage();
        if (fromEmail != null && !fromEmail.trim().isEmpty()) {
            message.setFrom(fromEmail);
        }
        message.setTo(ownerEmail);
        message.setSubject(subject);
        message.setText(text);

        try {
            emailSender.send(message);
            System.out.println("✅ Appointment notification email successfully sent to owner: " + ownerEmail);
        } catch (Exception e) {
            System.err.println("⚠️ Error sending notification email to owner: " + e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * Send booking confirmation email to the Patient / User
     */
    public void sendConfirmationToCustomer(String customerName, String customerEmail, String service, String time) {
        if (customerEmail == null || customerEmail.trim().isEmpty()) {
            return;
        }

        String subject = "✨ Appointment Confirmed - Luxe Skin Clinic, Surat";
        String text = String.format(
            "Dear %s,%n%n" +
            "Thank you for booking with Luxe Skin Clinic! Your appointment has been received and scheduled.%n%n" +
            "--------------------------------------------------%n" +
            "APPOINTMENT SUMMARY:%n" +
            "Doctor: Dr. Kenin Jadvani (Skin Specialist & Cosmetologist)%n" +
            "Treatment: %s%n" +
            "Date & Time: %s%n%n" +
            "CLINIC LOCATION & CONTACT:%n" +
            "Address: 401, Pavitra Point, Near Saundarya Heights, Savaliya Circle, Yogi Chowk, Surat, Gujarat 395011%n" +
            "Phone / WhatsApp: +91 96626 70946%n" +
            "Landline: (0261) 4395778%n" +
            "Google Maps GPS: https://maps.app.goo.gl/VXtrnCkijEYok93U9?g_st=ac%n" +
            "Instagram: https://instagram.com/luxe.skin.clinic.0702%n" +
            "--------------------------------------------------%n%n" +
            "If you need to reschedule or have questions before your visit, please call or WhatsApp us at +91 96626 70946.%n%n" +
            "Warm regards,%n" +
            "Dr. Kenin Jadvani & Team%n" +
            "Luxe Skin Clinic, Surat",
            customerName, service, time
        );

        // Try Resend HTTP API first (works on Render free tier over Port 443)
        if (sendViaResend(customerEmail, subject, text)) {
            return;
        }

        // Fallback to JavaMailSender (SMTP)
        if (emailSender == null) {
            System.out.println("JavaMailSender is not initialized. Skipping email to customer.");
            return;
        }

        SimpleMailMessage message = new SimpleMailMessage();
        if (fromEmail != null && !fromEmail.trim().isEmpty()) {
            message.setFrom(fromEmail);
        }
        message.setTo(customerEmail);
        message.setSubject(subject);
        message.setText(text);

        try {
            emailSender.send(message);
            System.out.println("✅ Confirmation email successfully sent to customer: " + customerEmail);
        } catch (Exception e) {
            System.err.println("⚠️ Error sending confirmation email to customer: " + e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * Helper method to send email via Resend HTTP REST API (Port 443)
     */
    private boolean sendViaResend(String to, String subject, String bodyText) {
        if (resendApiKey == null || resendApiKey.trim().isEmpty()) {
            System.out.println("ℹ️ RESEND_API_KEY is missing or empty. Skipping Resend HTTP API.");
            return false;
        }

        System.out.println("🚀 Dispatching email via Resend HTTP API to: " + to);

        try {
            HttpClient client = HttpClient.newHttpClient();

            String escapedBody = bodyText.replace("\\", "\\\\")
                                         .replace("\"", "\\\"")
                                         .replace("\n", "\\n")
                                         .replace("\r", "");
            String escapedSubject = subject.replace("\"", "\\\"");

            String jsonPayload = String.format(
                "{\"from\":\"Luxe Skin Clinic <onboarding@resend.dev>\",\"to\":[\"%s\"],\"subject\":\"%s\",\"text\":\"%s\"}",
                to, escapedSubject, escapedBody
            );

            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.resend.com/emails"))
                .header("Authorization", "Bearer " + resendApiKey.trim())
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
                .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                System.out.println("✅ Email successfully sent via Resend HTTP API to: " + to + " (Response: " + response.body() + ")");
                return true;
            } else {
                System.err.println("⚠️ Resend HTTP API returned status " + response.statusCode() + ": " + response.body());
                // Return true here if key was supplied so we don't hang on blocked SMTP timeouts
                return true;
            }
        } catch (Exception e) {
            System.err.println("⚠️ Error sending email via Resend HTTP API: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }
}
