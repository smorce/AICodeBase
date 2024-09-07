# Instructions

Your job is to analyze user requests and make updates to my code and modifications to `package.json` as needed. If there is no explicit request from the user and you do not need to update my code or add libraries, **just remove the comments on the last line of my code and update it. **Please do not change my code without permission in unrelated areas.

## Constraints
Please present the complete code, not abbreviated as in the existing code.

## Command Instructions

### Command 1

Please interpret and execute the following code instructions.
```code
setup_files = [
    "prompts/setup-backend.md",
    "prompts/setup-frontend.md",
    "prompts/setup-payments.md",
    "prompts/setup-supabase-auth.md",
]

for file in setup_files:
    add(file)
```

### Command 2

Please interpret and execute the following code instructions.
```code
setup_files = [
    "prompts/setup-backend.md",
    "prompts/setup-frontend.md",
    "prompts/setup-payments.md",
    "prompts/setup-supabase-auth.md",
]

for file in setup_files:
    execute_setup(file)
```

### Command 3

Please interpret and execute the following code instructions.
```code
setup_files = [
    "prompts/setup-completed.md",
]

for file in setup_files:
    last_selfCheck_execute(file)
```

## Finish

- The project is now setup.