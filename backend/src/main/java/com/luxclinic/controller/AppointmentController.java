package com.luxclinic.controller;

import com.luxclinic.model.Appointment;
import com.luxclinic.repository.AppointmentRepository;
import com.luxclinic.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "*") // Allows requests from the React frontend (or specify http://localhost:5173)
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<?> bookAppointment(@RequestBody Appointment request) {
        try {
            // Save appointment to PostgreSQL
            Appointment savedAppointment = appointmentRepository.save(request);

            // Format appointment date & time
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
            String formattedTime = request.getAppointmentTime() != null ? 
                    request.getAppointmentTime().format(formatter) : "Not specified";

            // 1. Send notification email to the Clinic Owner (Dr. Kenin Jadvani)
            emailService.sendAppointmentNotificationToOwner(
                    request.getCustomerName(),
                    request.getCustomerEmail(),
                    request.getCustomerPhone(),
                    request.getServiceRequested(),
                    formattedTime
            );

            // 2. Send booking confirmation email to the Patient / Customer
            emailService.sendConfirmationToCustomer(
                    request.getCustomerName(),
                    request.getCustomerEmail(),
                    request.getServiceRequested(),
                    formattedTime
            );

            return ResponseEntity.ok().body("Appointment booked successfully. ID: " + savedAppointment.getId());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error booking appointment: " + e.getMessage());
        }
    }
}
