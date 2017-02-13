export function formatDescription(string, length) {
    return length === 1 ? `${length} ${string}` : `${length} ${string}s`
}