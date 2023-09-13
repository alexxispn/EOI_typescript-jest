export const removeExclamations = (sentence: string) => {
    const removedExclamations = sentence.replace(/!/g, '')
    const result = removedExclamations + '!'

    return result
}
