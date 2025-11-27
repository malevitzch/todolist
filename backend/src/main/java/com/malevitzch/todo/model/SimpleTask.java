package com.malevitzch.todo.model;
import jakarta.persistence.Entity;

@Entity
public class SimpleTask {
   private final String name;
   private boolean completed;

   SimpleTask(String name) {
      this.name = name;
      completed = false;
   }
}