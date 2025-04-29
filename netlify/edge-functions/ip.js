const ipReturn = async (request, context) => {
    console.log(`IP: ${context.ip}`);
    return new Response(`IP: ${context.ip}`);
};

export const config = {
    path: '/ip',
};

export default ipReturn;

