const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};
const getContent = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could not fatch ${url}, status: ${res.status }`);
    }

    return await res.json();
};

export {postData};
export {getContent};