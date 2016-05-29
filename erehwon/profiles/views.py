from django.shortcuts import render
from django.views.generic import TemplateView

from profiles.models import Project, Idea, Message


# Create your views here.
class LoginView(TemplateView):
    """
    The Login view.
    """

    template_name = "profiles/login.html"

class RegistrationView(TemplateView):
    """
    The Login view.
    """

    template_name = "profiles/register.html"


def project_list(request):

	projects = Project.objects.all()
	context = {'projects': projects}


	return render(request, 'profiles/my-projects.html', context)

def idea_list(request):

	ideas = Idea.objects.all()
	context = {'ideas': ideas}


	return render(request, 'profiles/ideas.html', context)

def message_list(request):

	messages = Message.objects.all().order_by('?')
	context = {'messages': messages}


	return render(request, 'profiles/dashboard-logged-in.html', context)

class CallForActionView(TemplateView):
    """
    The Dashboard view to create call for actions.
    """

    template_name = "profiles/callforaction.html"

