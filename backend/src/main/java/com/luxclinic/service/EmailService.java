package com.luxclinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender emailSender;

    @Value("${clinic.owner.email:owner@luxclinic.com}")
    private String ownerEmail;

    /**
     * Send notification email to the Clinic Owner / Dr. Kenin Jadvani
     */
    public void sendAppointmentNotificationToOwner(String customerName, String customerEmail, String customerPhone, String service, String time) {
        if (emailSender == null) {
            System.out.println("JavaMailSender is not initialized. Skipping email to owner.");
            return;
        }

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(ownerEmail);
        message.setSubject("🚨 New Appointment Booking Alert - " + customerName + " (" + service + ")");
        
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
                
        message.setText(text);
        
        try {
            emailSender.send(message);
            System.out.println("✅ Appointment notification email successfully sent to owner: " + ownerEmail);
        } catch (Exception e) {
            System.err.println("⚠️ Error sending notification email to owner: " + e.getMessage());
        }
    }

    /**
     * Send booking confirmation email to the Patient / User
     */
    public void sendConfirmationToCustomer(String customerName, String customerEmail, String service, String time) {
        if (emailSender == null) {
            System.out.println("JavaMailSender is not initialized. Skipping email to customer.");
            return;
        }

        if (customerEmail == null || customerEmail.trim().isEmpty()) {
            return;
        }

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(customerEmail);
        message.setSubject("✨ Appointment Confirmed - Luxe Skin Clinic, Surat");
        
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
                
        message.setText(text);
        
        try {
            emailSender.send(message);
            System.out.println("✅ Confirmation email successfully sent to customer: " + customerEmail);
        } catch (Exception e) {
            System.err.println("⚠️ Error sending confirmation email to customer: " + e.getMessage());
        }
    }
}
