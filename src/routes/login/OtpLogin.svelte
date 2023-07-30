<script lang="ts">
    import { superForm } from 'sveltekit-superforms/client';
    import type { SuperValidated } from 'sveltekit-superforms';
    import type { OtpLoginSchema } from '$lib/schemas';

    export let data: SuperValidated<OtpLoginSchema>;
    let emailSent = false;

    const { form, errors, enhance } = superForm(data, {
        resetForm: true,
        onResult: ({ result }) => {
            if (result.type === 'success') {
                emailSent = true;
            }
        }
    });
</script>

<div class="max-w-2xl text-center mt-12">
    <h1 class="text-4xl font-semibold">Login with One Time Password</h1>
</div>

<div class="card mt-6 w-full">
    {#if !emailSent}
        <form
            class="flex flex-col space-y-6"
            method="POST"
            action="?/loginOtp"
            use:enhance
        >
            <label class="space-y-2" for="email">
                <span>Email</span>
                <input type="email" name="email" bind:value={$form.email} />
                {#if $errors.email}
                    <div class="block text-red-600 dark:text-red-500">
                        {$errors.email}
                    </div>
                {/if}
                {#if $errors._errors}
                    <div class="block text-red-600 dark:text-red-500">
                        {$errors._errors}
                    </div>
                {/if}
            </label>

            <button type="submit" class="w-full">Login</button>
        </form>
    {/if}

    {#if emailSent}
        <h3 class="text-center">Please Verify Your Email</h3>
        <p class="text-center">
            Once you have verified your email address you can get started using
            ponderif
        </p>
    {/if}
</div>
