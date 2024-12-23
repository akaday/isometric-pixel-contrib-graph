import asyncio
import websockets

async def handle_connection(websocket, path):
    while True:
        try:
            message = await websocket.recv()
            print(f"Received message: {message}")
            response = f"Echo: {message}"
            await websocket.send(response)
        except websockets.ConnectionClosed:
            print("Connection closed")
            break

async def main():
    async with websockets.serve(handle_connection, "localhost", 8765):
        await asyncio.Future()  # Run forever

if __name__ == "__main__":
    asyncio.run(main())
