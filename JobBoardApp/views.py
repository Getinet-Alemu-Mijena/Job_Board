from django.shortcuts import render

def LandingPage(request):
    return render(request, 'JobBoardApp/LandingPage.html')
def SignUp(request):
    return render(request, 'JobBoardApp/SignUp.html')
def SignIn(request):
    return render(request, 'JobBoardApp/SignIn.html')
def Employers(request):
    return render(request, 'JobBoardApp/Employers/Employers.html')
def ManageJobs(request):
    return render(request, 'JobBoardApp/Employers/ManageJobs.html')
def JobApplications(request):
    return render(request, 'JobBoardApp/Employers/JobApplications.html')
def Messages(request):
    return render(request, 'JobBoardApp/Employers/Messages.html')
def Notifications(request):
    return render(request, 'JobBoardApp/Employers/Notifications.html')
def ApplicantTracking(request):
    return render(request, 'JobBoardApp/Employers/ApplicantTracking.html')
def Analytics(request):
    return render(request, 'JobBoardApp/Employers/Analytics.html')
def ViewApplicationDetail(request):
    return render(request, 'JobBoardApp/Employers/ViewApplicationDetail.html')
def JobsDetail(request):
    return render(request, 'JobBoardApp/Employers/JobsDetail.html')
def CreateJob(request):
    return render(request, 'JobBoardApp/Employers/CreateJob.html')
def Candidates(request):
    return render(request, 'JobBoardApp/Candidates/Candidates.html')
def Admin(request):
    return render(request, 'JobBoardApp/Admin/Admin.html')
