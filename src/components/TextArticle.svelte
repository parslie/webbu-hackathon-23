<article>
    <slot />
</article>

<style lang="scss">
    @import "../variables.scss";
    @import "../default.scss";

    article {
        margin: $medium-size 0;
        padding: $medium-size;
        border-radius: $medium-size;
        background: $black;
        color: $white;
    }
</style>