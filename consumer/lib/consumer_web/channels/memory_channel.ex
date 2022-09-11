defmodule ConsumerWeb.MemoryChannel do
  use ConsumerWeb, :channel

  def join("memory:" <> id, _params, socket) do
    {:ok, %{ }, socket}
  end
end