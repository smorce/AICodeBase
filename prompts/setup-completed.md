# Instructions

Your job is to self-check that the project setup is complete. Be sure to check that user requirements have been met. If there is no explicit request from the user, please make sure the comment on the last line of my code has been removed.

## Constraints

Please present the complete code, not abbreviated as in the existing code.

## Command Instructions

Please interpret and execute the following code instructions.
```code
file_paths = [
    'actions/example-actions.ts',
    'actions/stripe-actions.ts',
    'app/layout.tsx',
    'app/page.tsx',
    'app/(auth)/layout.tsx',
    'app/(auth)/login/page.tsx',
    'app/(auth)/signup/page.tsx',
    'app/api/stripe/webhooks/route.ts',
    'components/header.tsx',
    'components/utilities/providers.tsx',
    'db/migrations/0000_XXXXX.sql',
    'db/queries/example-queries.ts',
    'db/schema/example-schema.ts',
    'db/schema/index.ts',
    'db/db.ts',
    'lib/stripe.ts',
    'types/action-types.ts',
    'types/index.ts',
    'utils/supabaseClient.ts',
]
for file in file_paths:
    # Step1
    force_add_to_edit_space(file)
    # Step2 file にユーザーの要求が反映されているか確認する
    # Step3
    if (file にユーザーの要求が反映されている):
        pass
    else:
        (ユーザーの要求に沿って file を更新する)
```

## Finish

- The self-check is now finished.