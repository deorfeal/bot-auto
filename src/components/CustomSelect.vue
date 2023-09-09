<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div v-for="(option, i) of options" :key="i" :id="i" @click="
                selected = option;
            open = false;
            $emit('input', option);
            ">
                {{ option }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                    ? this.options[0]
                    : null,
            open: false,
        };
    },
    mounted() {
        this.$emit("input", this.selected);
    },
};
</script>
  
<style>
.custom-select {
    position: relative;
    text-align: left;
    outline: none;
    line-height: 35px;
    max-width: 100%;
    width: 100%;
}

.custom-select .selected {
    cursor: pointer;
    user-select: none;
    color: #FFF;
    font-size: 12px;
    line-height: 11px;
    border: 1px solid #FFF;
    padding: 13px 13px 13px 16px;
    display: flex;
    align-content: center;
    gap: 14px;
}

.custom-select .selected.open {

}

.custom-select .selected::before {
    content: '';
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(../../public/img/arrow-icon.svg);
    background-position: center;
    transition: transform 0.3s;
}

.custom-select .selected.open::before {
    transform: rotate(180deg);
}

.custom-select .items {
    position: absolute;
    background: linear-gradient(180deg, #010101 0%, #021C37 41.61%, #010C18 83.22%, #000 124.82%, #010101 166.43%);
    border: 1px solid #fff;
    left: 0;
    top: 105%;
    right: 0;
    z-index: 1;
}

.custom-select .items div {
    padding: 13px 13px 13px 16px;
    color: #fff;
    font-size: 12px;
    line-height: 11px;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    transition: background 0.3s;
}

.custom-select .items div:hover {

}

.selectHide {
    display: none;
}
</style>
  