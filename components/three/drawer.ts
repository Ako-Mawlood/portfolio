"use client"

import * as THREE from "three"

export class Drawer {
  public texture: THREE.CanvasTexture
  public aspect!: number

  private _ctx: CanvasRenderingContext2D
  private _canvas: HTMLCanvasElement
  private _margin = 130

  constructor(
    private _text1: string,
    private _text2: string,
  ) {
    this._canvas = document.createElement("canvas")
    this._ctx = this._canvas.getContext("2d")!
    this.texture = new THREE.CanvasTexture(this._canvas)

    this._resizeCanvas()
    window.addEventListener("resize", this._handleResize)
  }

  private _handleResize = () => {
    this._resizeCanvas()
    this.draw()
  }

  private _resizeCanvas = () => {
    const width = Math.min(window.innerWidth * 0.8, 1024)
    const height = width / 2.2

    this._canvas.width = width
    this._canvas.height = height
    this.aspect = width / height
  }

  draw = () => {
    const ctx = this._ctx
    const { width, height } = this._canvas

    ctx.clearRect(0, 0, width, height)

    const fontSize = Math.floor(width / 12) // scale with width

    ctx.textAlign = "left"
    ctx.textBaseline = "hanging"
    ctx.font = `300 ${fontSize}px "Helvetica Neue", Helvetica, Arial, sans-serif`
    ctx.fillStyle = "#fff"

    const text2Metrics = ctx.measureText(this._text2)

    ctx.fillText(this._text1, this._margin, this._margin)
    ctx.fillText(
      this._text2,
      width - text2Metrics.width - this._margin,
      height - (fontSize + this._margin),
    )

    this.texture.needsUpdate = true
  }
}
