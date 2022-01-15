# python network_map.py && open network_map.png
import diagrams
from diagrams.generic import network, place, device
from diagrams.onprem import network as onprem_network, compute, client
from diagrams import custom
from diagrams.generic import blank, os

from pkg import util


raspberry_pi_image_path = util.os_path('lib/web/frontend/_local/illustrations/Raspberry-Pi.png')

with diagrams.Diagram('Home network v1', show=False, filename='network_map'):
    internet = onprem_network.Internet('ISP')

    turing = custom.Custom('Router (FreeBSD)', raspberry_pi_image_path)
    internet - turing

    switch = network.Switch('Switch\n192.168.1.0/24')
    turing - switch

    fourier = custom.Custom('Node 1 (Ubuntu)', raspberry_pi_image_path)
    switch - fourier
    euler = custom.Custom('Node 2 (Ubuntu)', raspberry_pi_image_path)
    switch - euler

    macbook = client.Client('MacBook')
    switch - macbook

    wifi = network.Router('WiFi AP')
    switch - wifi

    mobile = device.Mobile('Mobile')
    wifi - mobile
