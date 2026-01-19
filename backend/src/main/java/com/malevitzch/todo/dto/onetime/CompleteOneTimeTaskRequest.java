package com.malevitzch.todo.dto.onetime;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CompleteOneTimeTaskRequest(@NotNull @NotBlank String tag) {}