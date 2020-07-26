<!-- Todo app -->
<script>
    let name = '';
    let todos = [{name: 'first task'}, {name: 'second task', done: true}];
    let active;

    function add() {
        if(!name) return;
        todos.push({name: name});
        name = '';
    }

    const remove = i => todos.splice(i, 1);
    const numDone = () => todos.filter(t => t.done).length;
</script>

{#if active}
    Edit: <input type="text" on:keydown|enter={active=null} bind:value={active.name} use={$element.focus()} />
{:else}
    <input type="text" on:keydown|enter={add()} bind:value={name} />
{/if}

<ul>
    {#each todos as todo}
        <li class:active={todo == active} class:inactive={todo.done}>
            <input type="checkbox" bind:checked={todo.done} />
            <span on:click={active=todo}>{$index}:  {todo.name}</span>
            <a href on:click|preventDefault={remove($index)}>remove</a>
        </li>
    {/each}
</ul>

Total done: {numDone()} of {todos.length}

<style>
    li {cursor: pointer;}
    .active {background-color: #cfc;}
    .inactive {text-decoration-line: line-through; color: gray;}
</style>