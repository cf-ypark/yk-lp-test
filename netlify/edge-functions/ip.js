const ipReturn = async (request, context) => {
    return new Response(`IP: ${context.ip}`);
};

export const config = {
    path: '/ip',
};

export default ipReturn;

