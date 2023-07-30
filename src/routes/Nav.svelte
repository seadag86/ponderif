<script lang="ts">
    import {
        Home,
        Search,
        Bell,
        Mail,
        ListOrdered,
        User,
        Edit,
        Plus
    } from 'lucide-svelte';
    import { page } from '$app/stores';
</script>

<nav class="w-[80px] lg:w-[275px] h-screen flex flex-col py-3">
    <a class="nav-brand flex items-center gap-2" href="/">
        <img
            src="/images/logo.png"
            class="h-[50px] sm:h-12"
            alt="Ponderif Logo"
        />
        <h1 class="hidden lg:block pt-2.5 text-4xl font-bold dark:text-white">
            Ponderif
        </h1>
    </a>

    <div class="mt-5 mb-7">
        <a href="/" class="nav-item" class:active={$page.url.pathname === '/'}>
            <Home />
            <span class="hidden lg:block text-xl">Home</span>
        </a>
        <a
            href="/Explore"
            class="nav-item"
            class:active={$page.url.pathname.startsWith('/explore')}
        >
            <Search />
            <span class="hidden lg:block text-xl">Explore</span>
        </a>
        <a
            href="/Notifications"
            class="nav-item"
            class:active={$page.url.pathname.startsWith('/notifications')}
        >
            <Bell />
            <span class="hidden lg:block text-xl">Notifications</span>
        </a>
        <a
            href="/messages"
            class="nav-item"
            class:active={$page.url.pathname.startsWith('/messages')}
        >
            <Mail />
            <span class="hidden lg:block text-xl">Messages</span>
        </a>
        <a
            href="/lists"
            class="nav-item"
            class:active={$page.url.pathname.startsWith('/lists')}
        >
            <ListOrdered />
            <span class="hidden lg:block text-xl">Lists</span>
        </a>
        <a
            href="/drafts"
            class="nav-item"
            class:active={$page.url.pathname.startsWith('/drafts')}
        >
            <Edit />
            <span class="hidden lg:block text-xl">Drafts</span>
        </a>
        <a
            href="/profile"
            class="nav-item"
            class:active={$page.url.pathname.startsWith('/profile')}
        >
            <User />
            <span class="hidden lg:block text-xl">Profile</span>
        </a>
    </div>

    <button type="button" class="action-btn">
        <Plus />
        <span class="hidden lg:block text-xl font-normal">Ponder </span>
    </button>
</nav>
