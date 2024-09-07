package Services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmailService {
    private JavaMailSender mailSender;

    public void sendEmail(String toEmiail,
                               String subject,
                               String body){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmiail);
        message.setFrom("juampylambertucci2002@gmail.com");
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);

    }

}
