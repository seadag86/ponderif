<script lang="ts">
    let tab = 'For You';
</script>

<article class="w-full">
    <header class="w-full">
        <div class="w-full flex items-center justify-stretch pt-3 gap-4">
            <button
                type="button"
                class="tab flex-grow"
                class:active={tab === 'For You'}
                on:click={() => (tab = 'For You')}
            >
                For You
            </button>
            <button
                type="button"
                class="tab flex-grow"
                class:active={tab === 'Following'}
                on:click={() => (tab = 'Following')}
            >
                Following
            </button>
        </div>
        <div
            class="w-full flex items-center justify-stretch gap-4 border-b border-b-zinc-700"
        >
            <div class="tab-separator" class:active={tab === 'For You'} />
            <div class="tab-separator" class:active={tab === 'Following'} />
        </div>
    </header>
</article>
