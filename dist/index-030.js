function formatValue(value) {
    // Write your code here
    // we're using type narrowing here to use type specific logic
    if (typeof value == 'string') {
        console.log(value.toLowerCase());
    }
    if (typeof value == 'number') {
        console.log(value.toFixed(2));
    }
}
formatValue('Hiya');
formatValue(42);
