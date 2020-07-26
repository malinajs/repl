<!-- Directive `use` -->
<script>
    let visible = false;
    const setStyle = el => {
        el.style.color = 'red';
    }
    let boldElement;
</script>

<input type="checkbox" bind:checked={visible} />
<span use={setStyle($element)}>set focus input on render</span>

<div>
    {#if visible}
        <input type="text" use={$element.focus()} />
    {/if}
</div>

save element in <b use={boldElement=$element}>variable</b>