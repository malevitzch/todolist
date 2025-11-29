package com.malevitzch.todo.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;

@Entity
// We have an index on the name columns since we are likely to search by name
@Table(indexes = {@Index(name = "idx_name", columnList = "name")})
public class SimpleTask {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    // TODO: use UUIDs for user-visible identifiers

    @Column(nullable = false)
    private String name;
    
    private boolean completed = false;

    SimpleTask(String name) {
      this.name = name;
    }
    
    public Long getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    
    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
    
    // The JPA (Java Persistence API) requires a default constructor
    protected SimpleTask() {}
    
    public String getTag() {
        // The tags are name#<id in base36>, used for distinguishing tasks for users
        return name + "#" + Long.toString(id, 36);
    }
}