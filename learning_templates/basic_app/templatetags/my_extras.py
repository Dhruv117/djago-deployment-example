from django import template

register = template.Library()


def cut(value,arg):
    """
    This cuts out al value of arg from a string
    """

    return value.replace(arg,'')


register.filter('cut',cut)
