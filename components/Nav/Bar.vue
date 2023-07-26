<script setup>
    const { navItemsMain, navItemsSocials } = useNavItems();
</script>

<template>
    <nav class="navbar-main glass flex">
        <ul class="navbar-section">
            <li class="navbar-item flex navbar-nohoverline" style="display: flex; align-items: center; padding-bottom: 0; padding-top: 0;">
                <a href="" class="navbar-link" style="letter-spacing: 0.3ch; text-transform: uppercase; font-size: 16px; font-family: 'Open Sans'; font-weight: bold; width:5.5rem;">
                    Text Here XD
                </a>
            </li>
        </ul>

        <ul class="navbar-section flex flex-row">
            <NavItem v-for="navItem in navItemsMain" :key="navItem.id" :navItem="navItem" :listLength="navItemsMain.length"/>
        </ul>

        <ul class="navbar-section flex flex-row">
            <NavItem v-for="navItem in navItemsSocials" :key="navItem.id" :navItem="navItem" :listLength="navItemsSocials.length"/>
        </ul>
    </nav>
</template>