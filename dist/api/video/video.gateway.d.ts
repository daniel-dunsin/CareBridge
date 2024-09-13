import { Server, Socket } from 'socket.io';
export declare class VideoGateway {
    server: Server;
    handleJoin(room: string, client: Socket): void;
    handleSignal(data: any, client: Socket): void;
    handleDisconnect(client: Socket): void;
}
