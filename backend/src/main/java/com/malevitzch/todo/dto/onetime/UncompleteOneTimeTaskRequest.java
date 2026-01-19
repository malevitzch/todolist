package com.malevitzch.todo.dto.onetime;

import jakarta.validation.constraints.NotNull;

public record UncompleteOneTimeTaskRequest(@NotNull String tag) {}