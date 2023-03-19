import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'gym-1',
      description: 'gym',
      phone: '000-000',
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    await gymsRepository.create({
      title: 'gym-2',
      description: 'gym',
      phone: '000-000',
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    const { gyms } = await sut.execute({
      query: '1',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'gym-1' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `gym-${i}`,
        description: 'gym',
        phone: '000-000',
        latitude: -27.2092052,
        longitude: -49.6401091,
      })
    }

    const { gyms } = await sut.execute({
      query: 'gym-',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'gym-21' }),
      expect.objectContaining({ title: 'gym-22' }),
    ])
  })
})
