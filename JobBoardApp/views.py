from django.shortcuts import render

def LandingPage(request):
    return render(request, 'JobBoardApp/LandingPage.html')
