const ipReturn = async (request, context) => {
    return new Response(`IP: ${request.socket.remoteAddress}`);
};

export const config = {
    path: '/ip',
};

export default ipReturn;

