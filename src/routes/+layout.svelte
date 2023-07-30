<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { invalidate } from '$app/navigation';
    import { Toaster } from 'svelte-french-toast';
    import Nav from '$lib/components/Nav.svelte';
    import type { LayoutData } from './$types';

    export let data: LayoutData;

    let { supabase, session } = data;
    $: ({ supabase, session } = data);

    onMount(() => {
        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange((event, _session) => {
            console.log(event, _session);
            if (_session?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth');
            }
        });

        return () => subscription.unsubscribe();
    });
</script>

<svelte:head>
    <title>PaymentRequestonderif</title>
</svelte:head>

<Toaster />
<div>
    <div class="container mx-auto flex">
        <Nav />

        <main class="w-full flex-grow bg-black/50">
            <slot />
        </main>
    </div>
</div>
