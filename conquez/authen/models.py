from django.db import models
from country.models import Country
from social_django.models import UserSocialAuth

# Models for the countries conquered. A bridge class that connects the User and Country Class
class Conquered(models.Model):
    country_id=models.ForeignKey(Country, on_delete=models.CASCADE)
    user_id=models.ForeignKey(UserSocialAuth, on_delete=models.CASCADE)

    def __str__(self):
        return '%s conquered %s' % (self.user_id, self.country_id)