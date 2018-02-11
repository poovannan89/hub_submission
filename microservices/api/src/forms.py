from flask_wtf import FlaskForm
from wtforms import Form, IntegerField, StringField, validators

class CookieForm(FlaskForm):
    username = StringField('Username', [validators.required(),validators.Length(min=4, max=25)])
    age = IntegerField('Age', [validators.required(),validators.NumberRange(min=0, max=150)])          