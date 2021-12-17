// union types can also be used in arrays, which can help
// with dealing with multiple formats of data types
// i.e. different date formats
function formatListings(listings) {
    return listings.map((listing) => {
        if (typeof listing === 'string') {
            return listing.toUpperCase();
        }
        if (typeof listing === 'number') {
            return `$${listing.toLocaleString()}`;
        }
    });
}
const result = formatListings([
    '123 Main St',
    226800,
    '580 Broadway Apt 4a',
    337900,
]);
console.log(result);
