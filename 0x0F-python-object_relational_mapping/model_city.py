#!/usr/bin/python3
""" Contains the class definition of a City """
from sqlalchemy import Column, Integer, String
from model_state import Base
from sqlalchemy import ForeignKey


class City(Base):
    """Class city"""
    __tablename__ = 'cities'
    id = Column(Integer, primary_key=True, nullable=False, unique=True,
                autoincrement=True)
    name = Column(String(128), nullable=False)
    state_id = Column(Integer, ForeignKey('states.id'), nullable=False)
