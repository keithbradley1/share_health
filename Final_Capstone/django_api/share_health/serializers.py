from share_health.models import User, Nutrition, Exercise
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'name')

class NutritionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Nutrition
        fields = ('id', 'url', 'name', 'nutrition')

class ExerciseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id', 'url', 'name', 'exercise')
