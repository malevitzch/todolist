package com.malevitzch.todo.dto.onetime;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AddOneTimeTaskRequest(@NotNull @NotBlank String name) {}