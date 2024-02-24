from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import LandingPage, SignIn, SignUp, Employers, Candidates, Admin, ManageJobs, JobApplications, Messages,Notifications, JobListingManagement, ApplicantTracking, Analytics


urlpatterns = [
    path('LandingPage/', LandingPage, name='landing_page'),
    path('SignIn/', SignIn, name='sign_in'),
    path('SignUp/', SignUp, name='sign_up'),
    path('Employers/', Employers, name='Employers'),
    path('ManageJobs/', ManageJobs, name='ManageJobs'),
    path('JobApplications/', JobApplications, name='JobApplications'),
    path('Messages/', Messages, name='Messages'),
    path('Notifications/', Notifications, name='Notifications'),
    path('JobListingManagement/', JobListingManagement, name='JobListingManagement'),
    path('ApplicantTracking/', ApplicantTracking, name='ApplicantTracking'),
    path('Analytics/', Analytics, name='Analytics'),
    path('Candidates/', Candidates, name='Candidates'),
    path('Admin/', Admin, name='Admin'),
]





