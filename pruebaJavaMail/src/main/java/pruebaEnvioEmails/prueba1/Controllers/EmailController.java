package pruebaEnvioEmails.prueba1.Controllers;

import pruebaEnvioEmails.prueba1.Dtos.EmailRequest;
import pruebaEnvioEmails.prueba1.Services.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/email")
@AllArgsConstructor
public class EmailController {

    private EmailService emailService;

    @GetMapping("/")
    public ResponseEntity<String> hello() {
        System.out.println("Ingresa a aca");
        return ResponseEntity.status(HttpStatus.OK).body("Hello World!");
    }

    @PostMapping("/")
    public ResponseEntity<Boolean> sendEmail(
            @RequestBody EmailRequest emailRequest) {
        System.out.println("Entra al controller");
        try {
            emailService.sendEmail(
                    emailRequest.getToEmail(),
                    emailRequest.getSubject(),
                    emailRequest.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(false);
        }
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

}
