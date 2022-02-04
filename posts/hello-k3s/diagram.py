# python diagram.py && open diagram.png
import diagrams
from diagrams.generic import network, place, device
from diagrams.onprem import network as onprem_network, compute, client
from diagrams import custom
from diagrams.generic import blank, os

from pkg import util


raspberry_pi_image_path = util.os_path('lib/web/frontend/_local/illustrations/Raspberry-Pi.png')

k3s_image_path = util.os_path('lib/kubernetes/k3s/_local/k3s-icon-color.png')

harbor_image_path = util.os_path('lib/kubernetes/harbor/_local/harbor-icon-color.png')

with diagrams.Diagram('Home cluster', show=False, filename='diagram'):
    internet = onprem_network.Internet('ISP')

    reverse_proxy = onprem_network.Nginx('Reverse Proxy')
    internet - reverse_proxy

    # switch = network.Switch('Switch\n192.168.1.0/24')
    # reverse_proxy - switch

    # gauss = custom.Custom('k3s server', raspberry_pi_image_path)
    with diagrams.Cluster('K3S cluster'):
        gauss = compute.Server('K3S server')
        reverse_proxy - gauss
        fourier = custom.Custom('K3S agent', raspberry_pi_image_path)
        gauss - fourier
        euler = custom.Custom('K3S agent', raspberry_pi_image_path)
        gauss - euler

    harbor = custom.Custom('Harbor', harbor_image_path)
    fourier - harbor
    euler - harbor

# with diagrams.Diagram('Home network v1', show=False, filename='diagram'):

#     turing = custom.Custom('Router (FreeBSD)', raspberry_pi_image_path)
#     internet - turing

#     fourier = custom.Custom('Node 1 (Ubuntu)', raspberry_pi_image_path)
#     switch - fourier
#     euler = custom.Custom('Node 2 (Ubuntu)', raspberry_pi_image_path)
#     switch - euler

#     macbook = client.Client('MacBook')
#     switch - macbook

#     wifi = network.Router('WiFi AP')
#     switch - wifi

#     mobile = device.Mobile('Mobile')
#     wifi - mobile
