<script lang="ts">
    import {
        Home,
        Search,
        Bell,
        Mail,
        ListOrdered,
        User,
        Edit
    } from 'lucide-svelte';
    import { page } from '$app/stores';
</script>

<nav class="w-[250px] h-screen flex flex-col p-3">
    <a class="nav-brand flex items-center gap-2" href="/">
        <img src="/images/logo.png" class=" h-8 sm:h-12" alt="ponderif Logo" />
        <h1 class="pt-2.5 text-4xl font-bold dark:text-white">Ponderif</h1>
    </a>

    <div class="mt-5 mb-7">
        <a
            href="/"
            class="flex items-center width-full gap-3 my-1 py-3 px-4 rounded-full text-zinc-400 hover:text-white hover:bg-white dark:hover:bg-black/50 transition-all duration-200"
            class:active={$page.url.pathname === '/'}
        >
            <Home />
            <span class="text-xl">Home</span>
        </a>
        <a
            href="/Explore"
            class="flex items-center width-full gap-3 my-1 py-3 px-4 rounded-full text-zinc-400 hover:text-white hover:bg-white dark:hover:bg-black/50 transition-all duration-200"
            class:active={$page.url.pathname.startsWith('/explore')}
        >
            <Search />
            <span class="text-xl">Explore</span>
        </a>
        <a
            href="/Notifications"
            class="flex items-center width-full gap-3 my-1 py-3 px-4 rounded-full text-zinc-400 hover:text-white hover:bg-white dark:hover:bg-black/50 transition-all duration-200"
            class:active={$page.url.pathname.startsWith('/notifications')}
        >
            <Bell />
            <span class="text-xl">Notifications</span>
        </a>
        <a
            href="/messages"
            class="flex items-center width-full gap-3 my-1 py-3 px-4 rounded-full text-zinc-400 hover:text-white hover:bg-white dark:hover:bg-black/50 transition-all duration-200"
            class:active={$page.url.pathname.startsWith('/messages')}
        >
            <Mail />
            <span class="text-xl">Messages</span>
        </a>
        <a
            href="/lists"
            class="flex items-center width-full gap-3 my-1 py-3 px-4 rounded-full text-zinc-400 hover:text-white hover:bg-white dark:hover:bg-black/50 transition-all duration-200"
            class:active={$page.url.pathname.startsWith('/lists')}
        >
            <ListOrdered />
            <span class="text-xl">Lists</span>
        </a>
        <a
            href="/drafts"
            class="flex items-center width-full gap-3 my-1 py-3 px-4 rounded-full text-zinc-400 hover:text-white hover:bg-white dark:hover:bg-black/50 transition-all duration-200"
            class:active={$page.url.pathname.startsWith('/drafts')}
        >
            <Edit />
            <span class="text-xl">Drafts</span>
        </a>
        <a
            href="/profile"
            class="flex items-center width-full gap-3 my-1 py-3 px-4 rounded-full text-zinc-400 hover:text-white hover:bg-white dark:hover:bg-black/50 transition-all duration-200"
            class:active={$page.url.pathname.startsWith('/profile')}
        >
            <User />
            <span class="text-xl">Profile</span>
        </a>
    </div>

    <button
        type="button"
        class="w-full h-14 rounded-full text-white font-bold bg-primary-500 hover:bg-primary-600 transition-all duration-200"
    >
        <span class="text-xl font-normal">Ponder </span>
    </button>
</nav>

<style>
    a.active {
        color: white !important;
    }
</style>
