# Python imports
from os.path import join

# Django imports
from django.utils.translation import ugettext_lazy as _

# project imports
from .common import PROJECT_ROOT, MIDDLEWARE

# ##### INTERNATIONALIZATION ##############################

LANGUAGE_CODE = 'en'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

LANGUAGE_COOKIE_NAME = 'en'
ADMIN_LANGUAGE_CODE = 'en'
# This list of languages will be provided
LANGUAGES = (
    ('en', _('English')),
    ('es', _('Espainsh')),
    ('ar', _('Arabic'))
)

# Look for translations in these locations
LOCALE_PATHS = (
    join(PROJECT_ROOT, 'locale'),
)

# Inject the localization middleware into the right position
MIDDLEWARE = [y for i, x in enumerate(MIDDLEWARE) for y in (
    ('django.middleware.locale.LocaleMiddleware', x) if MIDDLEWARE[i-1] == \
    'django.contrib.sessions.middleware.SessionMiddleware' else (x, ))]
