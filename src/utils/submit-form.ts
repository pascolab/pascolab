


export const submitForm = async (FORM_URL: string, data: unknown) => {
    try {
        const response = await fetch(FORM_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(data),
          })
        return response
    } catch (error) {
        console.error('Error submitting form:',error)
        return null
    }
}