package pruebaEnvioEmails.prueba1.Dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmailRequest {
    private String toEmail;
    private String subject;
    private String body;
}
