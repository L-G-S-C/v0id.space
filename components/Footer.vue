<script setup>
    const themeMenuWheel = ref(false);
    const theme = useLocalStorage('theme', 'sanguine')
    useHead({
        htmlAttrs: {'data-theme': theme.value ? theme.value : 'sanguine'}
    })

    const changeTheme = (event) => {
        let DOMElement = event.target;
        let themeName = DOMElement.getAttribute('theme');

        document.documentElement.setAttribute('data-theme', themeName);
        theme.value = themeName;
    }

    const themeHandler = () => {
        themeMenuWheel.value = !themeMenuWheel.value;
    }    
</script>

<template>
    <div id="themeMenuDiv">
        <button type="button" @click="themeHandler()" class="themeMenuBtn glass" :class="themeMenuWheel ? 'checkboxActive' : ''">
            <font-awesome-icon :icon="['fas', 'palette']" size="xl"/>
        </button>
        <ul class="themeMenu-list">
            <li class="themeMenu-item">
                <button type="button" class="themeBtn glass" theme="sanguine" @click="changeTheme">
                    <font-awesome-icon :icon="['fas', 'droplet']" size="xl" />
                </button>
            </li>
            <li class="themeMenu-item">
                <button type="button" class="themeBtn glass" theme="venomous" @click="changeTheme">
                    <font-awesome-icon :icon="['fas', 'skull-crossbones']" size="xl" />
                </button>
            </li>
            <li class="themeMenu-item">
                <button type="button" class="themeBtn glass" theme="royal" @click="changeTheme">
                    <font-awesome-icon :icon="['fas', 'crown']" size="xl" />
                </button>
            </li>
            <li class="themeMenu-item">
                <button type="button" class="themeBtn glass" theme="aquatic" @click="changeTheme">
                    <font-awesome-icon :icon="['fas', 'water']" size="xl" />
                </button>
            </li>
            <li class="themeMenu-item">
                <button type="button" class="themeBtn glass" theme="forest" @click="changeTheme">
                    <font-awesome-icon :icon="['fas', 'tree']" size="xl" />
                </button>
            </li>
        </ul>
    </div>

    <div>
        <dialog id="themepicker" class="dialog glass" close>
            <div class="dialog-navbar flex flex-row">
                <div>
                    <h1 style="padding-left: 1rem; font-weight: 500;">Theme Picker</h1>
                </div>
                <div>
                    <button type="button" onclick="themepicker.close()" style="margin-right: 1rem">
                        <font-awesome-icon :icon="['fas', 'xmark']" size="2xl"/>
                    </button>
                </div>
            </div>
            <div>
                <p>lmaoooo</p>
            </div>
        </dialog>
    </div>
</template>