
package com.taskflow.app;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        EditText email = findViewById(R.id.loginEmail);
        EditText password = findViewById(R.id.loginPassword);

        Button loginButton = findViewById(R.id.loginButton);
        TextView signupText = findViewById(R.id.goToSignup);

        signupText.setOnClickListener(v -> {
            startActivity(new Intent(this, SignupActivity.class));
        });

        loginButton.setOnClickListener(v -> {
            String emailValue = email.getText().toString().trim();
            String passwordValue = password.getText().toString();

            if (emailValue.isEmpty() || passwordValue.isEmpty()) {
                Toast.makeText(this,
                        "Please enter email and password",
                        Toast.LENGTH_SHORT).show();
                return;
            }

            // Demo navigation only.
            // Real authentication will be connected later.
            startActivity(new Intent(this, MainActivity.class));
            finish();
        });
    }
}
