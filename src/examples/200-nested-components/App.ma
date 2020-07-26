<!-- Nested components -->
<script>
    import Hello from './Hello.ma';
    let name = 'Everybody';
</script>

<Hello></Hello>
<Hello name="World"></Hello>
<Hello name={name}></Hello>