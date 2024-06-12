package com.example.work;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import org.springframework.data.annotation.Id;
@Entity
public class Book {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String isbn;
    private String imageUrl;
    private int pageCount;

    @ManyToOne
    private Category category;

    public void setId(Long id) {
    }

    // Getters and Setters
}