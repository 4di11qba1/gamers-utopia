from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .pusher import pusher_client

# Create your views here.
class MessageAPIView(APIView):
    messages = []

    def get(self, request):
        return Response(self.messages)

    def post(self, request):    
        new_message = {
            'username': request.data.get('username', ''),
            'message': request.data.get('message', ''),
        }
        self.messages.append(new_message)
        
        pusher_client.trigger('chat', 'message', new_message)
        
        return Response(new_message)
